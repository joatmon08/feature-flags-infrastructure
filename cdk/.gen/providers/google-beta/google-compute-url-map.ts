// https://www.terraform.io/docs/providers/google-beta/r/google_compute_url_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GoogleComputeUrlMapConfig extends TerraformMetaArguments {
  /** The backend service or backend bucket to use when none of the given rules match. */
  readonly defaultService?: string;
  /** An optional description of this resource. Provide this property when you create
the resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** default_route_action block */
  readonly defaultRouteAction?: GoogleComputeUrlMapDefaultRouteAction[];
  /** default_url_redirect block */
  readonly defaultUrlRedirect?: GoogleComputeUrlMapDefaultUrlRedirect[];
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapHeaderAction[];
  /** host_rule block */
  readonly hostRule?: GoogleComputeUrlMapHostRule[];
  /** path_matcher block */
  readonly pathMatcher?: GoogleComputeUrlMapPathMatcher[];
  /** test block */
  readonly test?: GoogleComputeUrlMapTest[];
  /** timeouts block */
  readonly timeouts?: GoogleComputeUrlMapTimeouts;
}
export interface GoogleComputeUrlMapDefaultRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
  readonly disabled?: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}
export interface GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
}
export interface GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay[];
}
export interface GoogleComputeUrlMapDefaultRouteActionRequestMirrorPolicy {
  /** The full or partial URL to the BackendService resource being mirrored to. */
  readonly backendService: string;
}
export interface GoogleComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface GoogleComputeUrlMapDefaultRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1. */
  readonly numRetries?: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
or if the backend service does not respond at all, example: disconnects, reset, read timeout,
connection failure, and refused streams.
gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
connect-failure: Loadbalancer will retry on failures connecting to backend services,
for example due to connection timeouts.
retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
This reset type indicates that it is safe to retry.
cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: GoogleComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout[];
}
export interface GoogleComputeUrlMapDefaultRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface GoogleComputeUrlMapDefaultRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.

The value must be between 1 and 255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.

The value must be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}
export interface GoogleComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}
export interface GoogleComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}
export interface GoogleComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response prior to sending the
response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapDefaultRouteActionWeightedBackendServices {
  /** The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight. */
  readonly backendService?: string;
  /** Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .

The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.

The value must be between 0 and 1000 */
  readonly weight?: number;
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction[];
}
export interface GoogleComputeUrlMapDefaultRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: GoogleComputeUrlMapDefaultRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: GoogleComputeUrlMapDefaultRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: GoogleComputeUrlMapDefaultRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: GoogleComputeUrlMapDefaultRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: GoogleComputeUrlMapDefaultRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: GoogleComputeUrlMapDefaultRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: GoogleComputeUrlMapDefaultRouteActionWeightedBackendServices[];
}
export interface GoogleComputeUrlMapDefaultUrlRedirect {
  /** The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained. The default is set to false.
 This field is required to ensure an empty block is not set. The normal default value is false. */
  readonly stripQuery: boolean;
}
export interface GoogleComputeUrlMapHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapHostRule {
  /** An optional description of this resource. Provide this property when you create
the resource. */
  readonly description?: string;
  /** The list of host patterns to match. They must be valid hostnames, except * will
match any string of ([a-z0-9-.]*). In that case, * must be the first character
and must be followed in the pattern by either - or .. */
  readonly hosts: string[];
  /** The name of the PathMatcher to use to match the path portion of the URL if the
hostRule matches the URL's host portion. */
  readonly pathMatcher: string;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials header. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For regular expression grammar
please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests.
An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
  readonly disabled?: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long results of a preflight request can be cached in seconds.
This translates to the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request.
The value must be between 200 and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
The value must be between 0.0 and 100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay[];
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy {
  /** The full or partial URL to the BackendService resource being mirrored to. */
  readonly backendService: string;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1. */
  readonly numRetries?: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:

5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
or if the backend service does not respond at all, example: disconnects, reset, read timeout,
connection failure, and refused streams.
gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
connect-failure: Loadbalancer will retry on failures connecting to backend services,
for example due to connection timeouts.
retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
This reset type indicates that it is safe to retry.
cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: GoogleComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout[];
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years */
  readonly seconds?: string;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.

The value must be between 1 and 255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.

The value must be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header to add. */
  readonly headerName?: string;
  /** The value of the header to add. */
  readonly headerValue?: string;
  /** If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header. */
  readonly replace?: boolean;
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request prior to
forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response prior to sending the
response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices {
  /** The full or partial URL to the default BackendService resource. Before forwarding the
request to backendService, the loadbalancer applies any relevant headerActions
specified as part of this backendServiceWeight. */
  readonly backendService?: string;
  /** Specifies the fraction of traffic sent to backendService, computed as
weight / (sum of all weightedBackendService weights in routeAction) .

The selection of a backend service is determined only for new traffic. Once a user's request
has been directed to a backendService, subsequent requests will be sent to the same backendService
as determined by the BackendService's session affinity policy.

The value must be between 0 and 1000 */
  readonly weight?: number;
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction[];
}
export interface GoogleComputeUrlMapPathMatcherDefaultRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: GoogleComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: GoogleComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: GoogleComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: GoogleComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: GoogleComputeUrlMapPathMatcherDefaultRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: GoogleComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: GoogleComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[];
}
export interface GoogleComputeUrlMapPathMatcherDefaultUrlRedirect {
  /** The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https. If set to
false, the URL scheme of the redirected request will remain the same as that of the
request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
true for TargetHttpsProxy is not permitted. The default is set to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was
supplied in the request. pathRedirect cannot be supplied together with
prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
original request will be used for the redirect. The value must be between 1 and 1024
characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request.
prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
neither. If neither is supplied, the path of the original request will be used for
the redirect. The value must be between 1 and 1024 characters. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is removed prior
to redirecting the request. If set to false, the query portion of the original URL is
retained.
 This field is required to ensure an empty block is not set. The normal default value is false. */
  readonly stripQuery: boolean;
}
export interface GoogleComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled. */
  readonly disabled: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive. */
  readonly httpStatus: number;
  /** The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive. */
  readonly percentage: number;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive. */
  readonly percentage: number;
  /** fixed_delay block */
  readonly fixedDelay: GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /** The BackendService resource being mirrored to. */
  readonly backendService: string;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. */
  readonly numRetries?: number;
  /** Specifies one or more conditions when this retry rule applies. Valid values are:
- 5xx: Loadbalancer will attempt a retry if the backend service responds with
any 5xx response code, or if the backend service does not respond at all,
example: disconnects, reset, read timeout, connection failure, and refused
streams.
- gateway-error: Similar to 5xx, but only applies to response codes
502, 503 or 504.
- connect-failure: Loadbalancer will retry on failures
connecting to backend services, for example due to connection timeouts.
- retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
Currently the only retriable error supported is 409.
- refused-stream: Loadbalancer will retry if the backend service resets the stream with a
REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
- cancelled: Loadbalancer will retry if the gRPC status code in the response
header is set to cancelled
- deadline-exceeded: Loadbalancer will retry if the
gRPC status code in the response header is set to deadline-exceeded
- resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
header is set to resource-exhausted
- unavailable: Loadbalancer will retry if
the gRPC status code in the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices {
  /** The default BackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight. */
  readonly backendService: string;
  /** Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000 */
  readonly weight: number;
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: GoogleComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[];
}
export interface GoogleComputeUrlMapPathMatcherPathRuleUrlRedirect {
  /** The host that will be used in the redirect response instead of the one
that was supplied in the request. The value must be between 1 and 255
characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https.
If set to false, the URL scheme of the redirected request will remain the
same as that of the request. This must only be set for UrlMaps used in
TargetHttpProxys. Setting this true for TargetHttpsProxy is not
permitted. The default is set to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one
that was supplied in the request. pathRedirect cannot be supplied
together with prefixRedirect. Supply one alone or neither. If neither is
supplied, the path of the original request will be used for the redirect.
The value must be between 1 and 1024 characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the
HttpRouteRuleMatch, retaining the remaining portion of the URL before
redirecting the request. prefixRedirect cannot be supplied together with
pathRedirect. Supply one alone or neither. If neither is supplied, the
path of the original request will be used for the redirect. The value
must be between 1 and 1024 characters. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case,
the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is
removed prior to redirecting the request. If set to false, the query
portion of the original URL is retained.
 This field is required to ensure an empty block is not set. The normal default value is false. */
  readonly stripQuery: boolean;
}
export interface GoogleComputeUrlMapPathMatcherPathRule {
  /** The list of path patterns to match. Each must start with / and the only place a
* is allowed is at the end following a /. The string fed to the path matcher
does not include any text after the first ? or #, and those chars are not
allowed here. */
  readonly paths: string[];
  /** The backend service or backend bucket to use if any of the given paths match. */
  readonly service?: string;
  /** route_action block */
  readonly routeAction?: GoogleComputeUrlMapPathMatcherPathRuleRouteAction[];
  /** url_redirect block */
  readonly urlRedirect?: GoogleComputeUrlMapPathMatcherPathRuleUrlRedirect[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /** The end of the range (exclusive). */
  readonly rangeEnd: number;
  /** The start of the range (inclusive). */
  readonly rangeStart: number;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches {
  /** The value should exactly match contents of exactMatch. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set. */
  readonly exactMatch?: string;
  /** The name of the HTTP header to match. For matching against the HTTP request's
authority, use a headerMatch with the header name ":authority". For matching a
request's method, use the headerName ":method". */
  readonly headerName: string;
  /** If set to false, the headerMatch is considered a match if the match criteria
above are met. If set to true, the headerMatch is considered a match if the
match criteria above are NOT met. Defaults to false. */
  readonly invertMatch?: boolean;
  /** The value of the header must start with the contents of prefixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set. */
  readonly prefixMatch?: string;
  /** A header with the contents of headerName must exist. The match takes place
whether or not the request's header has a value or not. Only one of exactMatch,
prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set. */
  readonly presentMatch?: boolean;
  /** The value of the header must match the regualar expression specified in
regexMatch. For regular expression grammar, please see:
en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
specified in the HTTP request, use a headerMatch with headerName set to PORT and
a regular expression that satisfies the RFC2616 Host header's port specifier.
Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
rangeMatch must be set. */
  readonly regexMatch?: string;
  /** The value of the header must end with the contents of suffixMatch. Only one of
exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
must be set. */
  readonly suffixMatch?: string;
  /** range_match block */
  readonly rangeMatch?: GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /** Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long. */
  readonly name: string;
  /** The value of the label must match the specified value. value can have a maximum
length of 1024 characters. */
  readonly value: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters {
  /** Specifies how individual filterLabel matches within the list of filterLabels
contribute towards the overall metadataFilter match. Supported values are:
  - MATCH_ANY: At least one of the filterLabels must have a matching label in the
provided metadata.
  - MATCH_ALL: All filterLabels must have matching labels in
the provided metadata. Possible values: ["MATCH_ALL", "MATCH_ANY"] */
  readonly filterMatchCriteria: string;
  /** filter_labels block */
  readonly filterLabels: GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  /** The queryParameterMatch matches if the value of the parameter exactly matches
the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
must be set. */
  readonly exactMatch?: string;
  /** The name of the query parameter to match. The query parameter must exist in the
request, in the absence of which the request match fails. */
  readonly name: string;
  /** Specifies that the queryParameterMatch matches if the request contains the query
parameter, irrespective of whether the parameter has a value or not. Only one of
presentMatch, exactMatch and regexMatch must be set. */
  readonly presentMatch?: boolean;
  /** The queryParameterMatch matches if the value of the parameter matches the
regular expression specified by regexMatch. For the regular expression grammar,
please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
exactMatch and regexMatch must be set. */
  readonly regexMatch?: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesMatchRules {
  /** For satifying the matchRule condition, the path of the request must exactly
match the value specified in fullPathMatch after removing any query parameters
and anchor that may be part of the original URL. FullPathMatch must be between 1
and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
be specified. */
  readonly fullPathMatch?: string;
  /** Specifies that prefixMatch and fullPathMatch matches are case sensitive.
Defaults to false. */
  readonly ignoreCase?: boolean;
  /** For satifying the matchRule condition, the request's path must begin with the
specified prefixMatch. prefixMatch must begin with a /. The value must be
between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
regexMatch must be specified. */
  readonly prefixMatch?: string;
  /** For satifying the matchRule condition, the path of the request must satisfy the
regular expression specified in regexMatch after removing any query parameters
and anchor supplied with the original URL. For regular expression grammar please
see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
fullPathMatch or regexMatch must be specified. */
  readonly regexMatch?: string;
  /** header_matches block */
  readonly headerMatches?: GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[];
  /** metadata_filters block */
  readonly metadataFilters?: GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[];
  /** query_parameter_matches block */
  readonly queryParameterMatches?: GoogleComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy {
  /** In response to a preflight request, setting this to true indicates that the
actual request can include user credentials. This translates to the Access-
Control-Allow-Credentials header. Defaults to false. */
  readonly allowCredentials?: boolean;
  /** Specifies the content for the Access-Control-Allow-Headers header. */
  readonly allowHeaders?: string[];
  /** Specifies the content for the Access-Control-Allow-Methods header. */
  readonly allowMethods?: string[];
  /** Specifies the regualar expression patterns that match allowed origins. For
regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
An origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOriginRegexes?: string[];
  /** Specifies the list of origins that will be allowed to do CORS requests. An
origin is allowed if it matches either allow_origins or allow_origin_regex. */
  readonly allowOrigins?: string[];
  /** If true, specifies the CORS policy is disabled.
which indicates that the CORS policy is in effect. Defaults to false. */
  readonly disabled?: boolean;
  /** Specifies the content for the Access-Control-Expose-Headers header. */
  readonly exposeHeaders?: string[];
  /** Specifies how long the results of a preflight request can be cached. This
translates to the content for the Access-Control-Max-Age header. */
  readonly maxAge?: number;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /** The HTTP status code used to abort the request. The value must be between 200
and 599 inclusive. */
  readonly httpStatus?: number;
  /** The percentage of traffic (connections/operations/requests) which will be
aborted as part of fault injection. The value must be between 0.0 and 100.0
inclusive. */
  readonly percentage?: number;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /** The percentage of traffic (connections/operations/requests) on which delay will
be introduced as part of fault injection. The value must be between 0.0 and
100.0 inclusive. */
  readonly percentage?: number;
  /** fixed_delay block */
  readonly fixedDelay?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /** abort block */
  readonly abort?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort[];
  /** delay block */
  readonly delay?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /** The BackendService resource being mirrored to. */
  readonly backendService: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /** Specifies the allowed number retries. This number must be > 0. */
  readonly numRetries: number;
  /** Specfies one or more conditions when this retry rule applies. Valid values are:
- 5xx: Loadbalancer will attempt a retry if the backend service responds with
  any 5xx response code, or if the backend service does not respond at all,
  example: disconnects, reset, read timeout, connection failure, and refused
  streams.
- gateway-error: Similar to 5xx, but only applies to response codes
  502, 503 or 504.
- connect-failure: Loadbalancer will retry on failures
  connecting to backend services, for example due to connection timeouts.
- retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  Currently the only retriable error supported is 409.
- refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
- cancelled: Loadbalancer will retry if the gRPC status code in the response
  header is set to cancelled
- deadline-exceeded: Loadbalancer will retry if the
  gRPC status code in the response header is set to deadline-exceeded
- resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  header is set to resource-exhausted
- unavailable: Loadbalancer will retry if the gRPC status code in
  the response header is set to unavailable */
  readonly retryConditions?: string[];
  /** per_try_timeout block */
  readonly perTryTimeout?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeout {
  /** Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive. */
  readonly nanos?: number;
  /** Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive. */
  readonly seconds: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite {
  /** Prior to forwarding the request to the selected service, the request's host
header is replaced with contents of hostRewrite. The value must be between 1 and
255 characters. */
  readonly hostRewrite?: string;
  /** Prior to forwarding the request to the selected backend service, the matching
portion of the request's path is replaced by pathPrefixRewrite. The value must
be between 1 and 1024 characters. */
  readonly pathPrefixRewrite?: string;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /** The name of the header. */
  readonly headerName: string;
  /** The value of the header to add. */
  readonly headerValue: string;
  /** If false, headerValue is appended to any values that already exist for the
header. If true, headerValue is set for the header, discarding any values that
were set for that header. */
  readonly replace: boolean;
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /** A list of header names for headers that need to be removed from the request
prior to forwarding the request to the backendService. */
  readonly requestHeadersToRemove?: string[];
  /** A list of header names for headers that need to be removed from the response
prior to sending the response back to the client. */
  readonly responseHeadersToRemove?: string[];
  /** request_headers_to_add block */
  readonly requestHeadersToAdd?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[];
  /** response_headers_to_add block */
  readonly responseHeadersToAdd?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
  /** The default BackendService resource. Before
forwarding the request to backendService, the loadbalancer applies any relevant
headerActions specified as part of this backendServiceWeight. */
  readonly backendService: string;
  /** Specifies the fraction of traffic sent to backendService, computed as weight /
(sum of all weightedBackendService weights in routeAction) . The selection of a
backend service is determined only for new traffic. Once a user's request has
been directed to a backendService, subsequent requests will be sent to the same
backendService as determined by the BackendService's session affinity policy.
The value must be between 0 and 1000 */
  readonly weight: number;
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesRouteAction {
  /** cors_policy block */
  readonly corsPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy[];
  /** fault_injection_policy block */
  readonly faultInjectionPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy[];
  /** request_mirror_policy block */
  readonly requestMirrorPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy[];
  /** retry_policy block */
  readonly retryPolicy?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy[];
  /** timeout block */
  readonly timeout?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionTimeout[];
  /** url_rewrite block */
  readonly urlRewrite?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite[];
  /** weighted_backend_services block */
  readonly weightedBackendServices?: GoogleComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[];
}
export interface GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect {
  /** The host that will be used in the redirect response instead of the one that was
supplied in the request. The value must be between 1 and 255 characters. */
  readonly hostRedirect?: string;
  /** If set to true, the URL scheme in the redirected request is set to https. If set
to false, the URL scheme of the redirected request will remain the same as that
of the request. This must only be set for UrlMaps used in TargetHttpProxys.
Setting this true for TargetHttpsProxy is not permitted. Defaults to false. */
  readonly httpsRedirect?: boolean;
  /** The path that will be used in the redirect response instead of the one that was
supplied in the request. Only one of pathRedirect or prefixRedirect must be
specified. The value must be between 1 and 1024 characters. */
  readonly pathRedirect?: string;
  /** The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
retaining the remaining portion of the URL before redirecting the request. */
  readonly prefixRedirect?: string;
  /** The HTTP Status code to use for this RedirectAction. Supported values are:

* MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.

* FOUND, which corresponds to 302.

* SEE_OTHER which corresponds to 303.

* TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.

* PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"] */
  readonly redirectResponseCode?: string;
  /** If set to true, any accompanying query portion of the original URL is removed
prior to redirecting the request. If set to false, the query portion of the
original URL is retained. Defaults to false. */
  readonly stripQuery?: boolean;
}
export interface GoogleComputeUrlMapPathMatcherRouteRules {
  /** For routeRules within a given pathMatcher, priority determines the order
in which load balancer will interpret routeRules. RouteRules are evaluated
in order of priority, from the lowest to highest number. The priority of
a rule decreases as its number increases (1, 2, 3, N+1). The first rule
that matches the request is applied.

You cannot configure two or more routeRules with the same priority.
Priority for each rule must be set to a number between 0 and
2147483647 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules
in the future without affecting the rest of the rules. For example,
1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
future without any impact on existing rules. */
  readonly priority: number;
  /** The backend service resource to which traffic is
directed if this rule is matched. If routeAction is additionally specified,
advanced routing actions like URL Rewrites, etc. take effect prior to sending
the request to the backend. However, if service is specified, routeAction cannot
contain any weightedBackendService s. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified. Only one of urlRedirect,
service or routeAction.weightedBackendService must be set. */
  readonly service?: string;
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherRouteRulesHeaderAction[];
  /** match_rules block */
  readonly matchRules?: GoogleComputeUrlMapPathMatcherRouteRulesMatchRules[];
  /** route_action block */
  readonly routeAction?: GoogleComputeUrlMapPathMatcherRouteRulesRouteAction[];
  /** url_redirect block */
  readonly urlRedirect?: GoogleComputeUrlMapPathMatcherRouteRulesUrlRedirect[];
}
export interface GoogleComputeUrlMapPathMatcher {
  /** The backend service or backend bucket to use when none of the given paths match. */
  readonly defaultService?: string;
  /** An optional description of this resource. Provide this property when you create
the resource. */
  readonly description?: string;
  /** The name to which this PathMatcher is referred by the HostRule. */
  readonly name: string;
  /** default_route_action block */
  readonly defaultRouteAction?: GoogleComputeUrlMapPathMatcherDefaultRouteAction[];
  /** default_url_redirect block */
  readonly defaultUrlRedirect?: GoogleComputeUrlMapPathMatcherDefaultUrlRedirect[];
  /** header_action block */
  readonly headerAction?: GoogleComputeUrlMapPathMatcherHeaderAction[];
  /** path_rule block */
  readonly pathRule?: GoogleComputeUrlMapPathMatcherPathRule[];
  /** route_rules block */
  readonly routeRules?: GoogleComputeUrlMapPathMatcherRouteRules[];
}
export interface GoogleComputeUrlMapTest {
  /** Description of this test case. */
  readonly description?: string;
  /** Host portion of the URL. */
  readonly host: string;
  /** Path portion of the URL. */
  readonly path: string;
  /** The backend service or backend bucket link that should be matched by this test. */
  readonly service: string;
}
export interface GoogleComputeUrlMapTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GoogleComputeUrlMap extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleComputeUrlMapConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_url_map',
      terraformGeneratorMetadata: {
        providerName: 'google-beta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultService = config.defaultService;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._defaultRouteAction = config.defaultRouteAction;
    this._defaultUrlRedirect = config.defaultUrlRedirect;
    this._headerAction = config.headerAction;
    this._hostRule = config.hostRule;
    this._pathMatcher = config.pathMatcher;
    this._test = config.test;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string;
  public get defaultService() {
    return this._defaultService;
  }
  public set defaultService(value: string | undefined) {
    this._defaultService = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // map_id - computed: true, optional: false, required: true
  public get mapId() {
    return this.getNumberAttribute('map_id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction?: GoogleComputeUrlMapDefaultRouteAction[];
  public get defaultRouteAction() {
    return this._defaultRouteAction;
  }
  public set defaultRouteAction(value: GoogleComputeUrlMapDefaultRouteAction[] | undefined) {
    this._defaultRouteAction = value;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect?: GoogleComputeUrlMapDefaultUrlRedirect[];
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public set defaultUrlRedirect(value: GoogleComputeUrlMapDefaultUrlRedirect[] | undefined) {
    this._defaultUrlRedirect = value;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction?: GoogleComputeUrlMapHeaderAction[];
  public get headerAction() {
    return this._headerAction;
  }
  public set headerAction(value: GoogleComputeUrlMapHeaderAction[] | undefined) {
    this._headerAction = value;
  }

  // host_rule - computed: false, optional: true, required: false
  private _hostRule?: GoogleComputeUrlMapHostRule[];
  public get hostRule() {
    return this._hostRule;
  }
  public set hostRule(value: GoogleComputeUrlMapHostRule[] | undefined) {
    this._hostRule = value;
  }

  // path_matcher - computed: false, optional: true, required: false
  private _pathMatcher?: GoogleComputeUrlMapPathMatcher[];
  public get pathMatcher() {
    return this._pathMatcher;
  }
  public set pathMatcher(value: GoogleComputeUrlMapPathMatcher[] | undefined) {
    this._pathMatcher = value;
  }

  // test - computed: false, optional: true, required: false
  private _test?: GoogleComputeUrlMapTest[];
  public get test() {
    return this._test;
  }
  public set test(value: GoogleComputeUrlMapTest[] | undefined) {
    this._test = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GoogleComputeUrlMapTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GoogleComputeUrlMapTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_service: this._defaultService,
      description: this._description,
      name: this._name,
      project: this._project,
      default_route_action: this._defaultRouteAction,
      default_url_redirect: this._defaultUrlRedirect,
      header_action: this._headerAction,
      host_rule: this._hostRule,
      path_matcher: this._pathMatcher,
      test: this._test,
      timeouts: this._timeouts,
    };
  }
}
