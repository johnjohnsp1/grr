'use strict';

goog.provide('grrUi.appController.module');

goog.require('grrUi.acl.module');
goog.require('grrUi.artifact.module');
goog.require('grrUi.client.module');
goog.require('grrUi.config.module');
goog.require('grrUi.core.module');
goog.require('grrUi.cron.module');
goog.require('grrUi.docs.module');
goog.require('grrUi.flow.module');
goog.require('grrUi.forms.module');
goog.require('grrUi.hunt.module');
goog.require('grrUi.outputPlugins.module');
goog.require('grrUi.routing.module');
goog.require('grrUi.semantic.module');
goog.require('grrUi.sidebar.module');
goog.require('grrUi.stats.module');
/**
 * If GRR is running with AdminUI.use_precompiled_js = True, then
 * grrUi.templates is a special autogenerated module containing all the
 * directives templates. If GRR is running with
 * AdminUI.use_precompiled_js = False, then this module is empty.
 */
goog.require('grrUi.templates.module');
goog.require('grrUi.user.module');


/**
 * Main GRR UI application module.
 */
grrUi.appController.module = angular.module('grrUi.appController',
                                            [grrUi.acl.module.name,
                                             grrUi.artifact.module.name,
                                             grrUi.client.module.name,
                                             grrUi.config.module.name,
                                             grrUi.core.module.name,
                                             grrUi.cron.module.name,
                                             grrUi.docs.module.name,
                                             grrUi.flow.module.name,
                                             grrUi.forms.module.name,
                                             grrUi.hunt.module.name,
                                             grrUi.outputPlugins.module.name,
                                             grrUi.routing.module.name,
                                             grrUi.semantic.module.name,
                                             grrUi.stats.module.name,
                                             grrUi.sidebar.module.name,
                                             grrUi.templates.module.name,
                                             grrUi.user.module.name]);

grrUi.appController.module.controller('GrrUiAppController', function() {});
