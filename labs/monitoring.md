# Monitoring Tool


The Monitoring Tool offers the capability to monitor serverless functions and obtain monitoring metrics through the automatic creation of personalized, user-proprietary Monitoring dashboards. This is feasible by the deployment of a Push Gateway node and the definition of an AWSISMonitoredBy relationship, provided by the Monitoring tool.

# Overview


Initially, the function code has to be injected with a code snippet through which the metrics are pushed towards the Prometheus Push Gateway instance. Since the serverless function is hosted on a nodeJS runtime environment, the code snippet is triggering a parallel worker thread to push metrics parallel to the execution of the cloud function. Monitored metrics are collected by PushGateway. 

Finally through the defintion of the AWSISMonitoredBy relationship, user proprietary Grafana dashboards are created and the monitoring metrics collected by the Prometheus PushgateWay node are visualized towards the user.

![](https://ibb.co/8DHhd0T)
