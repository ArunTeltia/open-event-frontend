import Ember from 'ember';
import FormMixin from 'open-event-frontend/mixins/form';

const { Component } = Ember;

export default Component.extend(FormMixin, {
  getValidationRules() {
    return {
      inline : true,
      delay  : false,
      on     : 'blur',
      fields : {
        appName: {
          identifier : 'app_name',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the App name')
            }
          ]
        },

        tagLine: {
          identifier : 'tag_line',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter a tag line')
            }
          ]
        },

        googleStorageBucketName: {
          identifier : 'google_storage_bucket_name',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the Bucket name')
            }
          ]
        },

        googleStorageAccessKey: {
          identifier : 'google_storage_access_key',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the access key')
            }
          ]
        },

        googleStorageAccessSecret: {
          identifier : 'google_storage_access_secret',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the access secret')
            }
          ]
        },

        amazonS3Region: {
          identifier : 'amazon_s3_region',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please select a region')
            }
          ]
        },

        amazonS3BucketName: {
          identifier : 'amazon_s3_bucket_name',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the Bucket name')
            }
          ]
        },

        amazonS3Key: {
          identifier : 'amazon_s3_key',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the key')
            }
          ]
        },

        amazonS3Secret: {
          identifier : 'amazon_s3_secret',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the secret')
            }
          ]
        },

        emailFrom: {
          identifier : 'email_from',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the from email')
            },
            {
              type   : 'email',
              prompt : this.l10n.t('Please enter a valid  email address')
            }
          ]
        },

        emailFromName: {
          identifier : 'email_from_name',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter name for from email')
            }
          ]
        },

        smtpHost: {
          identifier : 'smtp_host',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the SMTP host')
            }
          ]
        },

        smtpPort: {
          identifier : 'smtp_port',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the SMTP port number')
            },
            {
              type   : 'integer',
              prompt : this.l10n.t('Please enter a valid port number')
            }
          ]
        },

        smtpUsername: {
          identifier : 'smtp_username',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the username for SMTP')
            }
          ]
        },

        smtpPassword: {
          identifier : 'smtp_password',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the password for SMTP')
            }
          ]
        },

        sendgridToken: {
          identifier : 'sendgrid_token',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the token for Sendgrid')
            }
          ]
        },

        superAdminEmail: {
          identifier : 'super_admin_email',
          rules      : [
            {
              type   : 'email',
              prompt : this.l10n.t('Please enter a valid email address for super admin')
            }
          ]
        },

        secretKey: {
          identifier : 'secret_key',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter the application secret key')
            },
            {
              type   : 'minLength[16]',
              prompt : this.l10n.t('Your application secret key must have at least {ruleValue} characters')
            }
          ]
        }
      }
    };
  },

  actions: {
    submit() {
      this.onValid(() => {
      });
    }
  }
});
