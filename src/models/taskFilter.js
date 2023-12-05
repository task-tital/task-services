
// const { Utilidades } = require('../utils/Utils');
// utils = new Utilidades();
import Utilidades from '../utils/Utils';
utils = new Utilidades();

/** */
class TaskMap {
    constructor() {
        this.id = [];
        this.title = "";
        this.description = "";
        this.dateEndGreater;
        this.dateEndLower;
        this.dateEndEquals = [];
        this.priorityGreater;
        this.priorityLower;
        this.priorityEquals = [];
        this.createdAtGreater;
        this.createdAtLower;
        this.createdAtEquals = [];
        this.updatedAtGreater;
        this.updatedAtLower;
        this.updatedAtEquals = [];
    }

    addId(otroId) {
        let existeId = false;

        for(idIterator in this.id) {
            if(idIterator == otroId) {
                existeId = true;
                break;
            }
        }
        
        if(!existeId) {
            this.id.push(otroId);
        }
    }

    removeId() {
        if(this.id.length > 0) {
            this.id.pop();
        }
    }

    removeThisId(otroId) {
        let indiceId = this.id.indexOf(otroId);

        if(indiceId !== -1) {
            this.id.splice(indiceId);
        }
    }

    setTitle(otroTitle) {
        this.title = otroTitle;
    }

    setDescription(otraDescription) {
        this.description = otraDescription;
    }

    setDateEnd(otroDateEnd) {
        let existeDateEnd = false;
        for(dateEndIterator in this.dateEndEquals) {
            if(dateEndIterator == otroDateEnd) {
                existeDateEnd = true;
                break;
            }
        }

        if(!existeDateEnd) {
            this.dateEndEquals.push(otroDateEnd);
            this.dateEndGreater = null;
            this.dateEndLower = null;
        }
    }

    removeDateEnd() {
        if(this.dateEndEquals.length > 0) {
            this.dateEndEquals.pop();
        }
    }

    removeThisDateEnd(otroDateEnd) {
        let indiceDateEnd = this.dateEndEquals.indexOf(otroDateEnd);

        if(indiceDateEnd !== -1) {
            this.dateEndEquals.splice(indiceDateEnd);
        }
    }

    setDateEndGreater(otroDateEnd) {
        this.dateEndGreater = otroDateEnd;
        this.dateEndEquals = [];
    }

    setDateEndLower(otroDateEnd) {
        this.dateEndLower = otroDateEnd;
        this.dateEndEquals = [];
    }

    setPriority(otroPriority) {
        let existePriority = false;
        for(priorityIterator in this.priorityEquals) {
            if(priorityIterator == otroPriority) {
                existePriority = true;
                break;
            }
        }

        if(!existePriority) {
            this.priorityEquals.push(otroPriority);
            this.priorityGreater = null;
            this.priorityLower = null;
        }
    }

    removePriority() {
        if(this.priorityEquals.length > 0) {
            this.priorityEquals.pop();
        }
    }

    removeThisPriority(otroPriority) {
        let indicePriority = this.priorityEquals.indexOf(otroPriority);

        if(indicePriority !== -1) {
            this.priorityEquals.splice(indicePriority);
        }
    }

    setPriorityGreater(otroPriority) {
        this.priorityGreater = otroPriority;
        this.priorityEquals = [];
    }

    setPriorityLower(otroPriority) {
        this.priorityLower = otroPriority;
        this.priorityEquals = [];
    }

    setCreatedAt(otroCreatedAt) {
        let existeCreatedAt = false;
        for(createdAtIterator in this.createdAtEquals) {
            if(createdAtIterator == otroCreatedAt) {
                existeCreatedAt = true;
                break;
            }
        }

        if(!existeCreatedAt) {
            this.createdAtEquals.push(otroCreatedAt);
            this.createdAtGreater = null;
            this.createdAtLower = null;
        }
    }

    removeCreatedAt() {
        if(this.createdAtEquals.length > 0) {
            this.createdAtEquals.pop();
        }
    }

    removeThisCreatedAt(otroCreatedAt) {
        let indiceCreatedAt = this.createdAtEquals.indexOf(otroCreatedAt);

        if(indiceCreatedAt !== -1) {
            this.createdAtEquals.splice(indiceCreatedAt);
        }
    }

    setCreatedAtGreater(otroCreatedAt) {
        this.createdAtGreater = otroCreatedAt;
        this.createdAtEquals = [];
    }

    setCreatedAtLower(otroCreatedAt) {
        this.createdAtLower = otroCreatedAt;
        this.createdAtEquals = [];
    }

    setUpdatedAt(otroUpdatedAt) {
        let existeUpdatedAt = false;
        for(updatedAtIterator in this.updatedAtEquals) {
            if(updatedAtIterator == otroUpdatedAt) {
                existeUpdatedAt = true;
                break;
            }
        }

        if(!existeUpdatedAt) {
            this.updatedAtEquals.push(otroUpdatedAt);
            this.updatedAtGreater = null;
            this.updatedAtLower = null;
        }
    }

    removeUpdatedAt() {
        if(this.updatedAtEquals.length > 0) {
            this.updatedAtEquals.pop();
        }
    }

    removeThisUpdatedAt(otroUpdatedAt) {
        let indiceUpdatedAt = this.updatedAtEquals.indexOf(otroUpdatedAt);

        if(indiceUpdatedAt !== -1) {
            this.updatedAtEquals.splice(indiceUpdatedAt);
        }
    }

    setUpdatedAtGreater(otroUpdatedAt) {
        this.updatedAtGreater = otroUpdatedAt;
        this.updatedAtEquals = [];
    }

    setUpdatedAtLower(otroUpdatedAt) {
        this.updatedAtLower = otroUpdatedAt;
        this.updatedAtEquals = [];
    }

    isSettedId() {
        return this.id.length > 0;
    }

    isSettedTitle() {
        return !utils.stringNuloVacio(this.title);
    }

    isSettedDescription() {
        return !utils.stringNuloVacio(this.description)
    }

    isSettedDateEndEquals() {
        return this.dateEndEquals.length > 0;
    }

    isSettedDateEndGreater() {
        return !utils.esNuloVacio(this.dateEndGreater);
    }

    isSettedDateEndLower() {
        return !utils.esNuloVacio(this.dateEndLower);
    }

    isSettedPriorityEquals() {
        return this.priorityEquals.length > 0;
    }

    isSettedPriorityGreater() {
        return !utils.esNuloVacio(this.priorityGreater);
    }

    isSettedPriorityLower() {
        return !utils.esNuloVacio(this.priorityLower);
    }

    isSettedCreatedAtEquals() {
        return this.createdAtEquals.length > 0;
    }

    isSettedCreatedAtGreater() {
        return !utils.esNuloVacio(this.createdAtGreater);
    }

    isSettedCreatedAtLower() {
        return !utils.esNuloVacio(this.createdAtLower);
    }

    isSettedUpdatedAtEquals() {
        return this.updatedAtEquals.length > 0;
    }

    isSettedUpdatedAtGreater() {
        return !utils.esNuloVacio(this.updatedAtGreater);
    }

    isSettedUpdatedAtLower() {
        return !utils.esNuloVacio(this.updatedAtLower);
    }
}