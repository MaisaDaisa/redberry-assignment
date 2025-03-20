export const validFileSize = (file: File, maxFileSize: number) => {
    return file && file.size <= maxFileSize
}
