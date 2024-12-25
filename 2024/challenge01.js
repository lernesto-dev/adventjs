function prepareGifts(gifts) {
    // Code here
    const newGifts = new Set(gifts);
    return Array.from(newGifts).sort((a, b) => a - b);
  }
  