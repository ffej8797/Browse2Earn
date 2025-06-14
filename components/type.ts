export type AverageCommunicateTime = {
    id: string;
    type: string;
    yearMonth: string;
    company: string;
    callMinutes: string;
    userCount: string;
    avgCallMinutes: string;
}

export type AverageText = {
    id: string;
    avgUserTextAmount: string;
    company: string;
    type: string;
    userCount: string;
    userTextAmount: string;
    yearMonth: string;
}

export type BroadbandUserStatistic = {
    id: string;
    company: string;
    type: string;
    user4g: string;
    user4gCard: string;
    user4gMonth: string;
    user5g: string;
    user5gCard: string;
    user5gMonth: string;
    userCount: string;
}