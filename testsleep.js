    const ms = 3000;
    
    console.log('Before sleep');
    console.log(`sleeping for ${ms} ms`);
    setTimeout(function () {console.log('After sleep');}, ms);
