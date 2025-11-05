import React from 'react';
import { observable, action, computed, makeObservable } from 'mobx';

const CounterStore = class {
    count = 0;

    constructor() {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
            doubleCount: computed,
        });
    }

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    get doubleCount() {
        return this.count * 2;
    }
};

export const counterStore = new CounterStore();
