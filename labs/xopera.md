# Deploy your functions

We have now successfully made a deployable model,
only thing we need now is to deploy it.

RADON comes with its own deployment tool called
xOpera.

## Export the model from GMT

- export the model from GMT

### Tasks

- open GMT (link in the right side of the IDE)
- Locate your model in the service templates,
  click on the template.
- Click `export` and `export to ide`
- Go back to the IDE and check that a new root
  folder called `radon-csars` has been created.
- Open the folder and check that you have a file
  called the same as your service template and
  with the `.csars` extension.

You are now ready to either use the
[CLI version](#cli-version) of the deployment
tool, or the [SaaS offering](#saas-version).

## CLI version

## SaaS version

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

## Test out the serverless application

- test it out.

The orchestrator puts the application into the
runtime environment, enforcing the state described
by application blueprint (CSAR) onto the targeted
provider(s). The common operations are deployment
and un-deploy and are executed on different target
environments such as staging, development and
production.
