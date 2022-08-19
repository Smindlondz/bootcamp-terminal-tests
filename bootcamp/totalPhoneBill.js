export default function totalPhoneBill(service) {
    let counter = 0;
    const totalServices = service.split(',');
    for (let i = 0; i < totalServices.length; i++) {
        const currentService = totalServices[i].trim();
        if (currentService.startsWith('s')) {
            counter += 0.65;
        }
        else {
            counter += 2.75;
        }
    }
    return 'R' + counter.toFixed(2)
}