import axios from 'axios';

class ItemService {

  sendData(data) {
    axios.post('http://localhost:8888/add/post', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  updateData(data, id){
    axios.post('http://localhost:8888/update/'+id, {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }
  deleteData(id){
    axios.post('http://localhost:8888/delete/'+id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default ItemService;