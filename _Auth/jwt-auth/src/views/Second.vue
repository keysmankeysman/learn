<template>
    <div>
        <h2>Second</h2> 
        <button @click="saveFileDoc">Создать docx</button>
    </div>
</template>

<script>

import { Document, Packer, Paragraph, TextRun } from "docx";
import FileSaver from 'file-saver';

export default {
    name: 'second',
    data: () => ({

    }),
    methods: {
        saveFileDoc() {
            console.log('saveFileDoc')
            const doc = new Document({
                sections: [
                {
                    properties: {},
                    children: [
                    new Paragraph({
                        children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                        new TextRun({
                            text: "אני אדם כמו כל אדם אחר בעולם חחחחחחחחחח הצחקתי את עצמי ",
                            bold: true,
                        }),
                        ],
                    }),
                    ],
                },
                ],
            });
            const mimeType =
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            const fileName = "test.docx";
            Packer.toBlob(doc).then((blob) => {
                const docblob = blob.slice(0, blob.size, mimeType);
                FileSaver.saveAs(docblob, fileName);
            });
        },
    },
    
}
</script>
