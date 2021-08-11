function triangle(row) {

    const bg = ['B','G'];
    const rg = ['R','G'];
    const br = ['B','R'];

    let startArr = row.split('');

    if(startArr.length === 1) {
        console.log(row);
        return row;
    }

    let res = [];

    while(startArr.length> 1) {

        for(let i = 0; i < startArr.length - 1; i++) {

            if(startArr[i] === startArr[i + 1]) {
                res.push(startArr[i]);

                console.log(i + ' iteration: equals ', startArr[i]);

            } else {

                let miniArr = [startArr[i], startArr[i + 1]];

                console.log('MiniArr ', miniArr);

                if(miniArr.every(el => bg.includes(el))) {
                    res.push('R');
                    console.log(i + ' iteration: BG ', 'R');
                } else if (miniArr.every(el => rg.includes(el))) {
                    res.push('B');
                    console.log(i + ' iteration: RG ', 'B');
                } else if (miniArr.every(el => br.includes(el))) {
                    res.push('G');
                    console.log(i + ' iteration: RB ', 'G');
                }
            }
        }

        startArr = res;
        console.log('startArr = ', startArr);
        res = [];
    }

    console.log('ANSWER: ', startArr.join(''));

    return startArr.join('');
}

;