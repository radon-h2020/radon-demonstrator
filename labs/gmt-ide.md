# IDE and Graphical modeling tool

The RADON development environment is based on the
[Eclipse Che](https://www.eclipse.org/che/)
technology: an open source developer workspace
server which comes with a cloud integrated
development environment (IDE) used by developers
to create applications without the need to install
any software on their local system.

> In order to get access to the RADON IDE, the
> user has to make a RADON Access Request using
> the form provided under “TEST RADON” available
> at the [RADON website](https://radon-h2020.eu/).
> A more comprehensive documentation on the RADON
> IDE can be found in the IDE
> [ReadTheDocs webpage](https://radon-ide.readthedocs.io/en/latest/).

## The IDE

The RADON IDE will have all the tools needed to
develop, model, orchestrate and deploy serverless
functions, through its various components shown in
the picture below:

![Picture of the different components that the RADON IDE consists of](img/IDE-concept.png)

In this workshop, we will try out a subsection of
all the different tools available.

Everything in the IDE is a container in itself,
making it easy to support the programming language
of your choice.

### Tasks

- Login to the environment through the
  [Website](http://che-che.51.11.43.6.nip.io/)
- In the dashboard select `Get Started` tab and
  then `Custom Workspace`.
- Copy the URL of the
  [RADON Devfile available here](https://raw.githubusercontent.com/radon-h2020/radon-ide/master/devfiles/radon/v0.0.4/devfile.yaml)
  and paste it in the field URL of devfile under
  Devfile section.
- Then click on `Load devfile`
- once the RADON devfile has been loaded click on
  the `Create & Open button`

After the workspace have been created you will be
greeted with the following screen (here in dark
mode):

![](img/IDE-layout.png)

Now you are ready to clone down the project code.

- Click terminal and
  `Open terminal in specific container` and clone
  down this repository.
- The project will be cloned in to a folder beside
  the RADON folder, ready for developing.

![](img/IDE-project-cloned.png)

For the ease of the workshop, we have pre-packaged
the functions needed in the next part. If you want
to package and upload the functions yourself, you
can use [The functionhub provided](functionhub.md)
with the framework as well.

## Graphical Modeling Tool

Taken from the
[documentation](https://radon-ide.readthedocs.io/en/latest/):

> It enables the users to create, develop, and
> model TOSCA service templates (i.e. RADON
> models), representing the applications that are
> deployed using the RADON Orchestrator. The GMT
> is able to interact with files and folders from
> the “modeling project” inside the underlying Che
> workspace. It offers also the feature to package
> and save a CSAR of a selected RADON Model to the
> workspace in order to give the possibility to
> process it using other RADON tools or deploy it
> using the RADON Orchestrator.

All the nodes represent different entities for
that provider, being cloud provider or tool
specifics.

All the necessary nodes can be found under the
namespace “radon.nodes.aws” at the palette In the
case of AWS, all the entities we need is present:

- Api gateway
- Lambda functions
- DynamoDB
- AWS Platform

In the picture below, you can see how

![](img/2-ModelNodeTemplates.gif)

After running the rest of this lab, you will have
a model that looks similar to this one:

![](img/application-GMT2.png)

### Tasks

- Open up GMT in the right hand side of the IDE
- Create a new Service Template
  ![](img/GMT-add-model.png)
- Give it a name (eg. "serverless-todo") and click
  add
- Click on the Topology Template tab, and the open
  editor button.

## Node Types

All the necessary nodes can be found under the
namespace “radon.nodes.aws” at the palette. The
ServerlessToDoListAPI application consists of the
following node types:

- 1 AwsApiGateway
- 5 AwsLambdaFunction
- 1 AwsDynamoDBTable
- 1 AwsPlatform

### Tasks

- Model all the different nodes we need by
  dragging them into the canvas from the left pane

## Node Properties

Having the nodes without specific properties will
not help us much, so we need to input the right
configuration for this to work. On the tab
properties we populate the different properties.
GMT provides a real time error detection to
prevent the user from filing false entries.

### Tasks

Populate all the nodes with the right properties:

<details>
      <summary>AwsPlatform</summary>

```
displayName: "AwsPlatform"
properties:
  name: "AWS"
  region: "eu-central-1"
```

</details>

<details>
      <summary>AwsAPIGateway</summary>

```
displayName: "AwsApiGateway"
properties:
  api_title: "ServerlessToDoListAPI"
  api_version: "1.0.0"
  api_description: "a simple serverless API example"
```

</details>

<details>
      <summary>AwsDynamoDBTable</summary>

```
displayName: "ItemsTable"
properties:
  hash_key_name: "id"
  read_capacity: 1
  write_capacity: 1
  hash_key_type: "STRING"
  table_name: "items"
```

</details>
<details>
      <summary>AwsLambdaFunction (get)</summary>

```
displayName: "GetTodoItem"
properties:
  handler: "get.handler"
  name: "get-todo"
  runtime: "nodejs10.x"
  statement_id: "get-stmt"
  zip_file: "1cea0130441318a22cee6904ea971a"
  env_vars: {"TODOS_TABLE":"items"}
```

</details>
<details>
      <summary>AwsLambdaFunction (Create)</summary>

```
displayName: "CreateTodoItem"
properties:
  handler: "create.handler"
  name: "create-item"
  runtime: "nodejs10.x"
  statement_id: "create-stmt"
  zip_file: "36f24b63abeb3a7f70a1f1ca42077e"
  env_vars: {"TODOS_TABLE":"items"}
```

</details>
<details>
      <summary>AwsLambdaFunction (list)</summary>

```
  displayName: "ListTodos"
      properties:
        handler: "list.handler"
        name: "list-todos"
        runtime: "nodejs10.x"
        statement_id: "list-statement"
        zip_file: "9f9fd845ed2f3b061136179467ba5f"
        env_vars: {"TODOS_TABLE":"items"}
```

</details>
<details>
      <summary>AwsLambdaFunction (update)</summary>

```
     displayName: "UpdateTodoItem"
      properties:
        handler: "update.handler"
        name: "update-item"
        runtime: "nodejs10.x"
        statement_id: "update-stmt"
        zip_file: "0b2516f89dbd44dc1bd03712e81db7"
        env_vars: {"TODOS_TABLE":"items"}
```

</details>
<details>
      <summary>AwsLambdaFunction (delete)</summary>

```
  displayName: "DeleteTodoItem"
      properties:
        handler: "delete.handler"
        name: "delete-item"
        runtime: "nodejs10.x"
        statement_id: "delete-stmt"
        zip_file: "07714624b3dd0c78502024164411a7"
        env_vars: {"TODOS_TABLE":"items"}
```

</details>

## Attaching the code

All the function nodes needs code attached to be
usefull. On the tab “Artifacts”, the artifacts
that accompany the lambda function can be attached
either by uploading a file or by referencing a URL
from [FunctionHub](functionhub.md).

### Tasks

- Select the `artifacts` view for the canvas.
- On each Lambda node, attach an artifact of the
  type `zip` with the following url for each

  - Delete
    `http://cloudstash.io/artifact_download/07714624b3dd0c78502024164411a7`
  - List:
    `http://cloudstash.io/artifact_download/9f9fd845ed2f3b061136179467ba5f`
  - Update:
    `http://cloudstash.io/artifact_download/0b2516f89dbd44dc1bd03712e81db7`
  - Get:
    `http://cloudstash.io/artifact_download/1cea0130441318a22cee6904ea971a`
  - Create:
    `http://cloudstash.io/artifact_download/36f24b63abeb3a7f70a1f1ca42077e`

- Under properties for each node, write the ID of
  the artifact that you pointed towards in the
  `zipe_file` field

## Node relationships

All nodes have some capabilities they offer and
some requirements they need from others.

As an example the requirement of the
AwsLambdaFunction node “HostedOn” has to be
matched with the capability of AwsPlatform node
“Host”.

![](img/4-ModelRelationships.gif)

In the end

### Tasks

- For all nodes besides `AwsPlatform`, they should
  have a requirement relationship from their
  `HostedOn` to the formers `Host` capability.
- For all Lambda functions, the requirement of
  `ConnectsTo` has to be matched with the
  capability of the DynamoDBTable node `Database`.
- `AwsApiGateway` needs to have a requirement
  relationship of `Invoker` to all lambda
  functions capability `Invokable`.
  - For all of the five relationships, some
    properties needs to be attached, listed below:

 <details>
      <summary>Get</summary>

```
properties:
  endpoint: "/todos/{id}"
  http_methods: "get"
```

</details>
<details>
      <summary>Create</summary>

```
properties:
  endpoint: "/todos/{id}"
  http_methods: "post"
```

</details>
<details>
      <summary>List</summary>

```
properties:
  endpoint: "/todos"
  http_methods: "get"
```

</details>
<details>
      <summary>Update</summary>

```
properties:
  endpoint: "/todos/{id}"
  http_methods: "put"
```

</details>
<details>
      <summary>Delete</summary>

```
properties:
  endpoint: "/todos/{id}"
  http_methods: "delete"
```

</details>

- When done, click save, and your model is done

## Finishing up

At the end of this, you should have a project
looking something like this:

![](img/application-GMT2.png)

## If something fails

If you got stuck, the example application has
already been modelled in the service templates
section called
`ServerlessToDoListAPITestingExample`.
