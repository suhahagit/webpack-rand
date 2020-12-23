import Renderer from './Renderer'
import APIManager from './APIManager'
import './style.css';

const renderer = new Renderer()
const apiManager = new APIManager()

const loadData = () => apiManager.loadData()
const renderData = () => renderer.render(apiManager.data)

$('#load-btn').on('click', loadData)
$('#display-btn').on('click', renderData)