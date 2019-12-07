//zmniejszyłam liczbę pętli

function evenAndSum(min, max) {
let minNum = Math.min(min, max);
let maxNum = Math.max(min, max);

    if (Number.isInteger(maxNum) && Number.isInteger(minNum))
        {
            let arr = new Array();
            let arr1 = new Array();
            for (let i = minNum; i <= maxNum; i+=1)
            {(i%2 === 0) && arr1.push(i);   
            arr.push(i);
                         }

            const sum = (beforeAdding, afterAdding) => beforeAdding + afterAdding;
            console.log("Suma liczb: " + arr.reduce(sum) + ", Liczby parzyste: " + arr1);
        }
    else {
    console.log("wpisz dwie liczby całkowite")
    }
};
//przykładowe sprawdzenie
evenAndSum(-6,5);