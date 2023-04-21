import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

const exportToXLSX = (jsonData, fileName) => {


    if (!fileName) fileName = 'статистика.xlsx'

    console.log(jsonData)
    console.log(fileName)

    const worksheet = XLSX.utils.json_to_sheet(jsonData)
    const workbook = XLSX.utils.book_new()
    console.log('worksheet', worksheet)
    console.log('workbook', workbook)

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    const fileBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([fileBuffer], { type: 'application/octet-stream'})
    saveAs(blob, fileName)
}

export default exportToXLSX