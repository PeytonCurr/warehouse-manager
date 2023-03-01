// console.log(`hey are we linking`);

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

let boxesElem = document.getElementById(`boxes`)

function draw(x) {
    let template = ``

    x.forEach(p => {
        template += `<section id="boxes" class="row text-light bg-dark justify-content-evenly p-3 border border-light m-3">
    <div class="col-1">
        <h1 class="text-success">TO:</h1>
    </div>
    <div class="col-4">
        <h1>${p.to}</h1>
    </div>
    <div class="col-2 text-end">
        <h1 class="text-success">ID:</h1>
    </div>
    <div class="col-3 text-end">
        <h1>${p.trackingNumber}</h1>
    </div>
</section>`
    })

    boxesElem.innerHTML = template
}

function allBoxes() {
    console.log(`Drawing boxes`);
    draw(packages);
}

function fragilePackages() {
    let fragile = packages.filter(f => f.isFragile);
    console.log(fragile, `fragile`)
    draw(fragile);
}

function heavyPackages() {
    let heavy = packages.filter(h => h.weight > 2);
    console.log(heavy, `Heavy`)
    draw(heavy);
}

function expressPackages() {
    let express = packages.filter(e => e.priorityLevel.includes(`express`));
    console.log(express, `Express`)
    draw(express);
}


allBoxes();
