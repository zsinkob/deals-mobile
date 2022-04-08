export function getDeal(dealId) {
    return new Promise((res) => setTimeout(() => res({
        dealReference: '02032255AS545',
        dealId: dealId,
        dealType: 'Important Deal',
        status: 'Gathering approvals',
    }), 1000));
}