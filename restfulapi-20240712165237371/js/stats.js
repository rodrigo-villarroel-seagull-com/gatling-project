var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "24",
        "ok": "24",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1109",
        "ok": "1109",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "percentiles1": {
        "total": "358",
        "ok": "358",
        "ko": "-"
    },
    "percentiles2": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1100",
        "ok": "1100",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 83.33333333333334
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 16.666666666666664
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_create-object-r-121462158": {
        type: "REQUEST",
        name: "Create Object restfulApi",
path: "Create Object restfulApi",
pathFormatted: "req_create-object-r-121462158",
stats: {
    "name": "Create Object restfulApi",
    "numberOfRequests": {
        "total": "8",
        "ok": "8",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1105",
        "ok": "1105",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles1": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "percentiles2": {
        "total": "614",
        "ok": "614",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1103",
        "ok": "1103",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 75.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 25.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.67",
        "ok": "0.67",
        "ko": "-"
    }
}
    },"req_update-object-r--1536132069": {
        type: "REQUEST",
        name: "Update Object restfulApi",
path: "Update Object restfulApi",
pathFormatted: "req_update-object-r--1536132069",
stats: {
    "name": "Update Object restfulApi",
    "numberOfRequests": {
        "total": "16",
        "ok": "16",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1109",
        "ok": "1109",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "251",
        "ok": "251",
        "ko": "-"
    },
    "percentiles1": {
        "total": "350",
        "ok": "350",
        "ko": "-"
    },
    "percentiles2": {
        "total": "372",
        "ok": "372",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1075",
        "ok": "1075",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 14,
    "percentage": 87.5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 12.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.33",
        "ok": "1.33",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
