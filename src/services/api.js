import axios from 'axios';
import {mostViewed} from '../config/urls.js';

let apiKey = 'kaX79p9KBpawDo4nGpZBOaAGoIrn6aFf';


export const getArticles = ({section, period, offset}) => {
    let url = mostViewed + '/' + section + '/' + period + '.json';
    
    let params = {
        'api-key': apiKey,
        offset: offset > 0 ? offset : null
    }

    return axios.get(url,{params});
}