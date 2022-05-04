const RandomColor = () => {
    const r = math.floor(math.random() * 256);
    const g = math.floor(math.random() * 256);
    const b = math.floor(math.random() * 256);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    
    return rgb;
}

console.log(RandomColor()) 