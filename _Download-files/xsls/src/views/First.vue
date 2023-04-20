<template>
    <div>
        <downloadExcel :data="tableItems" :fields="getExcelHeaders"> </downloadExcel>
    </div>
</template>

<script>


export default {
    name: 'first',

    data() {
        return {
            tableHeaders: [{
                text: "Идентификатор сессии",
                value: "sessionIdTime",
                type: "String",
                unit: null
            }, {
                text: "Дата начала",
                value: "startTime",
                type: "DateTime",
                unit: null
            }, {
                text: "Дата завершения",
                value: "endTime",
                type: "DateTime",
                unit: null
            }, {
                text: "Длительность",
                value: "duration",
                type: "DateTime",
                unit: null
            }],
            tableHeaderNames: [{
                text: "Идентификатор сессии",
                value: "sessionIdTime",
                type: "String",
                unit: null
            }, {
                text: "Дата начала",
                value: "startTime",
                type: "DateTime",
                unit: null
            }, {
                text: "Дата завершения",
                value: "endTime",
                type: "DateTime",
                unit: null
            }, {
                text: "Длительность",
                value: "duration",
                type: "DateTime",
                unit: null
            }],
            tableItems: [{
                sessionIdTime: "13805147852803425116",
                startTime: "15.02.2023 13:51:30",
                endTime: "15.02.2023 13:55:17",
                duration: "01.01.2000 00:03:47",
                id: 0
            }, {
                sessionIdTime: "3361003834243443059",
                startTime: "15.02.2023 13:53:14",
                endTime: "15.02.2023 13:55:15",
                duration: "01.01.2000 00:02:00",
                id: 1
            }, {
                sessionIdTime: "3361003834243443059",
                startTime: "15.02.2023 13:53:14",
                endTime: "15.02.2023 13:55:15",
                duration: "01.01.2000 00:02:00",
                id: 2
            }]
        }
    },
    methods: {
    
    },
    computed: {
        getHeaderNames() {
            return this.tableItems.length ? this.tableHeaders : [];
        },
        getExcelHeaders () {
            let excelHeaders = {};
            console.log(this.getHeaderNames)
            this.getHeaderNames.forEach(row => {
                // excelHeaders[row.text] = row.value;
                excelHeaders[`${row.text}`] = row.value;
            });
            console.log('excelHeaders', excelHeaders)
            return excelHeaders;
        }
    }

}
</script>