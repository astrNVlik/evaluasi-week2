function task(loginuser)

{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

task(loginuser)
   .then(()=> task('Ambil Data'))
   .then(()=> task('Tampilkan Dashboard'))