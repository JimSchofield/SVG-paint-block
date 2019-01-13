// This function is used both in the 'canvas' layer and in the block
// when saving the block
export default function(arrayOfPoints) {
    let pathString = '';

    if (arrayOfPoints.length < 1) {
        return pathString;
    }

    const firstPoint = arrayOfPoints[0];
    pathString += `M${firstPoint.x},${firstPoint.y} `;

    for (let i = 1; i < arrayOfPoints.length; i++) {
        const point = arrayOfPoints[i];
        pathString += `L${point.x},${point.y} `;
    }

    return pathString;
}