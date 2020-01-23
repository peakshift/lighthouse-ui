import namor from 'namor'
import React from "react"
import {
    Link
} from "react-router-dom";

const range = (len: any) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

function generateRandomHash(length: any) {
    const characters = "0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    let string = "";
    for (let i = 1; i <= length; i++) {
        string += characters[Math.floor(Math.random() * characters.length)];
    }
    return string;
}

const newValidator = () => {
    const statusChance = Math.random()
    return {
        validator_pubkey: <Link to="/validators/xyz/0x0000000000000000000000000000000000000000">0x${generateRandomHash(6)}...${generateRandomHash(6)}</Link>,
        withdrawal_credentials: Math.floor(Math.random() * 30),
        effective_balance: Math.floor(Math.random() * 30),
        slashed: statusChance > 0.66
            ? 'Yes'
            : 'No',
        activation_epoch: Math.floor(Math.random() * 30),
        exit_epoch: Math.floor(Math.random() * 100),
        actions: <div><button className="button-actions">Start</button> <button className="button-actions">Stop</button> <button className="button-actions">Exit Committee</button> <button className="button-actions">Remove</button></div>,
        tags: <div><a href="">batch1</a>, <a href="">batch2</a> </div>,
        withdrawable_epoch: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? <span className="status--ready">Ready</span>
                : statusChance > 0.33
                    ? <span className="status--running">Running</span>
                    : <span className="status--stopped">Stopped</span>,
    }
}

export default function makeData(...lens: any) {
    const makeDataLevel: any = (depth: number = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newValidator(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}