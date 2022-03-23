import {makeAutoObservable} from 'mobx';
export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Сосиски'},
            {id: 4, name: 'Батарейки'},
            {id: 5, name: 'Молоко'},
        ];

        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ];

        this._devices = [
            {id: 1, name: 'Iphone 12', price: 1200, rating: 5, img: ''},
            {id: 2, name: 'Iphone 13', price: 200, rating: 5, img: ''},
            {id: 3, name: 'Iphone 14', price: 500, rating: 5, img: ''},
            {id: 4, name: 'Iphone 15', price: 700, rating: 5, img: ''},
        ];

        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get selectedTypes() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedType;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

}