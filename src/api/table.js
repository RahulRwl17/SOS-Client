class Table {

    static addTable = async (data) => {
        const token = localStorage.getItem('token')

        var res = await fetch(`${base}/table/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        return res.json();
    }


    static findTable = async (data) => {
        const token = localStorage.getItem('token')

        var res = await fetch(`${base}/table/TablesList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        return res.json();
    }

    static updateTable = async (data, id) => {
        const token = localStorage.getItem('token')

        var res = await fetch(`${base}/table/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        return res.json();
    }



}


let base = "http://3.17.236.199:8000";

export default Table;