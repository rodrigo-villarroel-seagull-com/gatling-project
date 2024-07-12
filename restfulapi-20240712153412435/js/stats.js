var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "217",
        "ok": "200",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "225",
        "ok": "225",
        "ko": "233"
    },
    "maxResponseTime": {
        "total": "2103",
        "ok": "2103",
        "ko": "1667"
    },
    "meanResponseTime": {
        "total": "459",
        "ok": "455",
        "ko": "507"
    },
    "standardDeviation": {
        "total": "335",
        "ok": "334",
        "ko": "343"
    },
    "percentiles1": {
        "total": "309",
        "ok": "304",
        "ko": "439"
    },
    "percentiles2": {
        "total": "531",
        "ok": "533",
        "ko": "508"
    },
    "percentiles3": {
        "total": "1014",
        "ok": "997",
        "ko": "960"
    },
    "percentiles4": {
        "total": "1917",
        "ok": "1925",
        "ko": "1526"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 179,
    "percentage": 82.48847926267281
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12,
    "percentage": 5.529953917050691
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9,
    "percentage": 4.147465437788019
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 17,
    "percentage": 7.834101382488479
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.08",
        "ok": "16.67",
        "ko": "1.42"
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
        "total": "79",
        "ok": "69",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "2103",
        "ok": "2103",
        "ko": "1667"
    },
    "meanResponseTime": {
        "total": "593",
        "ok": "599",
        "ko": "554"
    },
    "standardDeviation": {
        "total": "460",
        "ok": "468",
        "ko": "399"
    },
    "percentiles1": {
        "total": "452",
        "ok": "452",
        "ko": "467"
    },
    "percentiles2": {
        "total": "588",
        "ok": "595",
        "ko": "506"
    },
    "percentiles3": {
        "total": "1688",
        "ok": "1781",
        "ko": "1261"
    },
    "percentiles4": {
        "total": "1966",
        "ok": "1983",
        "ko": "1586"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 57,
    "percentage": 72.15189873417721
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 3.79746835443038
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9,
    "percentage": 11.39240506329114
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 12.658227848101266
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.58",
        "ok": "5.75",
        "ko": "0.83"
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
        "total": "138",
        "ok": "131",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "225",
        "ok": "225",
        "ko": "233"
    },
    "maxResponseTime": {
        "total": "972",
        "ok": "972",
        "ko": "783"
    },
    "meanResponseTime": {
        "total": "382",
        "ok": "379",
        "ko": "441"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "195",
        "ko": "225"
    },
    "percentiles1": {
        "total": "288",
        "ok": "287",
        "ko": "317"
    },
    "percentiles2": {
        "total": "468",
        "ok": "465",
        "ko": "626"
    },
    "percentiles3": {
        "total": "806",
        "ok": "812",
        "ko": "778"
    },
    "percentiles4": {
        "total": "895",
        "ok": "900",
        "ko": "782"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 122,
    "percentage": 88.40579710144928
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 6.521739130434782
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
    "count": 7,
    "percentage": 5.072463768115942
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.5",
        "ok": "10.92",
        "ko": "0.58"
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
