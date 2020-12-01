const performGetRequest1 = () => {
    const resultElement = document.querySelector('#getResult1');
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(response => {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(error => {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

const generateSuccessHTMLOutput = (response) => {
    return  '<h4>Result:</h4>' +
            '<h5>Status:</h5>' +
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

const generateErrorHTMLOutput = (error) => {
    return  '<h4>Result:</h4>' +
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5>' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

const performGetRequest2 = () => {
    let resultElement = document.querySelector('#getResult2');
    let todoId = document.querySelector('#todoId').value;
    resultElement.innerHTML = '';

    axios.get('http://jsonplaceholder.typicode.com/todos', {
        params: {
            id: todoId
        }
    })
        .then(response => {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(error => {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

document.querySelector('#todoInputForm').addEventListener('submit', performPostRequest)

// const performPostRequest = e => {
//     let resultElement = document.querySelector('#postResult');
//     let todoTitle = document.querySelector('#todoTitle').value;
//     resultElement.innerHTML = '';

//     axios.post('http://jsonplaceholder.typicode.com/todos', {
//         userId: '1',
//         title: todoTitle,
//         completed: false
//     })
//     .then(response => {
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//     })
//     .catch(error => {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//     })
//     e.preventDefault();
// }

document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(e) {
    const resultElement = document.getElementById('postResult');
    const todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';
    
    axios.post('http://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: todoTitle,
        completed: false
    })
    .then(response => {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(error => {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
    e.preventDefault();
}

function clearOutput() {
    let resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = ''
    resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = ''
    resultElement = document.getElementById('postResult');
    resultElement.innerHTML = ''
}