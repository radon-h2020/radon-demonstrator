# Testing your Application with the Continuous Testing Tool (CTT)

In this lab exercise we demonstrate the usage of CTT on the example of the "Serverless ToDoList" example. In the following, we use the term system under test (SUT) for the application that is supposed to be tested (i.e., the "Serverless ToDoList") and the term test infrastructure (TI) for a separate instance that executes the test (e.g., issues requests towards the SUT).

To run this example, the following information is required:
* AWS Access Key ID
* AWS Secret Access Key
* AWS EC2 SSH Key Type (e.g., OPENSSH, RSA)
* AWS EC2 SSH Key (without the header and footer sections)
* AWS EC2 SSH Key Name
* AWS VPC Subnet ID


## Preparing the Workspace with Credentials
The information mentioned above is required by CTT to interact with AWS and deploy your SUT and TI for the test execution.
They need to be supplied in the devfile that is used througout the deployment of the workspace. The following listing shows an exemplary excerpt of the `devfile.yaml`'s CTT `env`-section on how the fields need to be populated with the credentials:

    env:
      - name: OPERA_SSH_USER
        value: "ubuntu"
      - name: OPERA_SSH_IDENTITY_FILE
        value: "/tmp/aws-ec2"
      - name: *AWS_ACCESS_KEY_ID*
        value: "AKSDF4353SFD3NMGXHERWQ"
      - name: *AWS_SECRET_ACCESS_KEY*
        value: "6QYMAS4sdfhAHDJ1L+pfgqZt/9OcxUN8a1/vg/ly"
      - name: *KEY_TYPE*
        value: "OPENSSH"
      - name: *SSH_PRIV_KEY*
        value: >
          c3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAA
          NhAAAAAwEAAQAAAxUA9DcKpAwyCTystithD
          [..]
          Akawm0cQ55NZ76el6jzUWBDePeT7mmWUCfm
          kVpfAebH2+m6/F/KpFE2Q8aFBhWSVD3SmX5
          YPAAAAAAECCwQ=

Once these variables are set, the workspace can be created.


## Attaching a Test Polcy to the "Serverless ToDoList" example



## Conifgurting the Test Scenario

## Executing CTT (using the RADON IDE)

## Executing CTT (using the CTT CLI Tool)




