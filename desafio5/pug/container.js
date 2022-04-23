const fs = require("fs");

class Container {
    constructor(fileName) {
        this.fileName = fileName;
    }
    async getData() {
        const data = await fs.promises.readFile(this.fileName, "utf8", function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            return json;
        });
        return JSON.parse(data);
    }
    async save(obj) {
        const json = await this.getData();
        const id = json.length + 1;
        obj.id = id;
        json.push(obj);
        fs.writeFile(this.fileName, JSON.stringify(json), function (err) {
            if (err) throw err;
        });
        console.log(id);
    }
    getItemById(id) {
        fs.readFile(this.fileName, "utf8", function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            const item = json.find((item) => item.id === id);
            if (typeof item === "undefined") {
                console.log(null);
            } else {
                console.log(item);
            }
        });
    }
    async getAll() {
        const products = await this.getData();
        return console.log(products);         
    }
    async deleteItemById(id) {
        const json = await this.getData();
        const newArray = json.filter((item) => item.id !== id);
        fs.writeFile(this.fileName, JSON.stringify(newArray), function (err) {
            if (err) throw err;
            console.log(`Product ${id} was removed`);
        });
        ;
    }
    async deleteAll() {
        const json = await this.getData();
        for (let i = json.length; i > 0; i--) {
            json.pop();
        }
        fs.writeFile(this.fileName, JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log("All products were removed.");
        });
    }
}

module.exports = Container;