export const fileTooLarge = (file: File) => {
    return !(file && file.size <= 1048576 && file.type.includes('image'))
}
