/* eslint-disable max-len */
// LOGIN, ESQUECI A SENHA, CADASTRO

// METHOD GET/POST/PUT/DELETE/PATCH

// GET: Listagem de elementos;
// POST: Cadastrar elementos;
// PUT: Editar os elementos;
// DELETE: Deletar os elementos;

// PATCH: Cadastrar elementos;
// https://api.sggs.com.br

// import axios from 'axios';

async function Login(
    email: string,
    password: string,
): Promise<any> {
    // try {
    //     // body
    //     // path + querys
    //     // method
    //     // headers
    //     const body = {
    //         email,
    //         password,
    //     };
    //     const stringBody = JSON.stringify(body);
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         // 'x-access-token': 'sdksdaksdakdsakkd22k212d122=12112-21d--21d-2d1',
    //     };
    //     // yarn add axios
    //     const response = await axios.post('https://api.sggs.com.br/users/token', stringBody, { headers });
    //     const data: any = response?.data;
    //     if (response.status === 200) {
    //         return data;
    //     }
    // } catch (error) {
    //     const { response }: any = error;
    //     // eslint-disable-next-line no-alert
    //     alert(response?.data?.message);
    // }
}

export default {
    Login,
};

// METHOD POST, /users/token, body: email e password, headers;
// `${baseUrl}/users/token?idDoUsuario:${idUser}&TokenAleatorio:${token}&TokenAleatorio01:${token01}`
