import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: 'tapao-custom-landing-page.enabled',
      type: 'boolean',
      label: app.translator.trans('tapao-custom-landing-page.admin.settings.enabled_label'),
    }))
    .setting(() => ({
      setting: 'tapao-custom-landing-page.guests_only',
      type: 'boolean',
      label: app.translator.trans('tapao-custom-landing-page.admin.settings.guests_only_label'),
      help: app.translator.trans('tapao-custom-landing-page.admin.settings.guests_only_help'),
    }))
    .setting(() => ({
      setting: 'tapao-custom-landing-page.html',
      type: 'textarea',
      label: app.translator.trans('tapao-custom-landing-page.admin.settings.html_label'),
      help: app.translator.trans('tapao-custom-landing-page.admin.settings.html_help'),
    }))
];
