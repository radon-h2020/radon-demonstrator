# Deploy your functions

!!!TODO!!!

- export the model from GMT
- use either CLI or SaaS solution
- test it out.

The orchestrator puts the application into the
runtime environment, enforcing the state described
by application blueprint (CSAR) onto the targeted
provider(s). The common operations are deployment
and un-deploy and are executed on different target
environments such as staging, development and
production.

Opera SaaS steps:

- Access the UI :
  https://xopera-radon.xlab.si/ui/. You can login
  using your radon credentials
- Create a workspace
- Create credentials
  - Name: whatever you want
  - For AWS use the same path that is used on
    local: /root/.aws/credentials
  - Copy the content of the credentials file found
    on your local machine on
    /root/.aws/credentials. Example below...

```[default]
aws_access_key_id = <secret>
aws_secret_access_key = <secret>
```

- Assign credentials to the workspace
- Invoke opera SaaS deploy from IDE
- Choose in which workspace to deploy it
- Create a project providing a name
- Choose whether you want to deploy to Cloud
  provider or not
- Provide the Service template name ( you need to
  download the csar and unzip it. The service
  template name you need to provide looks like
  this:
  “\_definitions/steIgeneral\_\_myexampleproject.tosca”
- Provide the inputs file.
  - It can be an empty inputs.yaml (containing
    :{}) and it can be stored in the IDE
    workspace. You access it in the projects
    folder on the popup
- Check deployment status in the UI.
- After successful deployment send a POST request
  to the apilink/todos with the following payload
  to tests the functionality of the application: {
  "todo": "Have a another coffee :-)" }
