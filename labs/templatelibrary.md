The *Template Library* is the place to store the TOSCA modules, corresponding Ansible playbooks and TOSCA CSARs describing a particular application. 
It was divided to support two different online repositories. RADON Particles is a community based repository on GitHub, the second one is 
[Template Library Publishing Service (TPS)}](https://template-library-radon.xlab.si/), which holds published TOSCA content that can be publicly available or closed.

TPS can be used directly from the RADON IDE workspace. When a new CSAR has been successfully exported to filesystem with GMT, it appears in the radon-csar 
folder on the left (see RADON IDE figure). Right clicking on the CSAR opens a dropdown menu, containing Template Library Publishing Service 
plugin’s actions. Publishing the content requires some additional data about the template which a user can add interactively - by choosing Template Library interactive actions in the dropdown - or using a config file - by choosing the Template Library config actions in the dropdown. After providing the data and RADON user credentials for TPS the CSAR is published to the configured endpoint. The details of this process are described in the [documentation](https://template-library-radon.xlab.si/docs/).



