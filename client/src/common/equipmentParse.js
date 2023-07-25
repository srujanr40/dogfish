export default function equipmentParse(strArray) {
    let outputArray = []
    for (let str of strArray) {
        if (str.includes(',')) {
            const elements = str.split(',').map(item => {
                const trimmedItem = item.trim();
                // Try to parse the element as a number
                const parsedNumber = parseFloat(trimmedItem);
                // If it's not a valid number, return the original string
                if (isNaN(parsedNumber)) {
                  return trimmedItem;
                }
                // If it's a valid number, return the parsed number
                return parsedNumber;
              });
            
            outputArray.push(elements);
        } else {
            outputArray.push([1, str])
        }
    }

    return outputArray
  }