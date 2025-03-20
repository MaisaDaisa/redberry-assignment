export const checkIfImage = (file: File) => {
    const allowedImgTypes = ['image/jpeg', 'image/png', 'image/gif']
    return file && allowedImgTypes.includes(file.type)
}
