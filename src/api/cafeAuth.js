class CafeAuth {

    static login = async (data) => {

        var res = await fetch(`${base}/auth/cafeuser/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },

            body: JSON.stringify(data)
        });

        return res.json();
    }


    static register = async (data) => {

        var res = await fetch(`${base}/cafe-user/register`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return res.json();
    }

}

let base = "http://3.17.236.199:8000";

export default CafeAuth;