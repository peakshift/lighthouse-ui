import namor from 'namor'

const range = (len: any) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

function generateRandomHash() {
    const characters = "0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    let string = "";
    let length = 6;
    for (let i = 0; i <= length; i++) {
        string += characters[Math.floor(Math.random() * characters.length)];
    }
    return string.toLowerCase();
}

const newValidator = () => {
    const statusChance = Math.random()
    return {
        validator_pubkey: `0x${generateRandomHash()}...${generateRandomHash()}`,
        withdrawal_credentials: Math.floor(Math.random() * 30),
        effective_balance: Math.floor(Math.random() * 30),
        slashed: statusChance > 0.66
            ? 'Yes'
            : 'No',
        activation_epoch: Math.floor(Math.random() * 30),
        exit_epoch: Math.floor(Math.random() * 100),
        withdrawable_epoch: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? 'ready'
                : statusChance > 0.33
                    ? 'running'
                    : 'stopped',
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