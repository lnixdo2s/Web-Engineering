import axios from 'axios';

const url = 'http://localhost:5000/api/menus/';

class MenuService {

    static getMenus() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }
    //Create Posts
    static insertMenu(text) {
        return axios.post(url, {
            text
        });
    }
    //Delete Posts
    static deleteMenu(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default MenuService;