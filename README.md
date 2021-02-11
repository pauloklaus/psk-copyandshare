# psk-copyandshare

Vue component to copy a text to clipboard.

* Report bugs: https://github.com/pauloklaus/psk-copyandshare/issues
* Live test: https://pauloklaus.com.br/playground

## Install

Create a new vue project:
```
vue create
```

Install component and dependencies:
```
npm install --save bootstrap bootstrap-vue psk-copyandshare
```

## Environment setting

Make a src/resources folder at the root:
```
mkdir src/resources
```

### Configure the bootstrap

Create the src/resources/bootstrap-vue.js:
```
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
```

### Configure the psk-copyandshare

Create the src/resources/psk-copyandshare.js:
```
import Vue from "vue";
import CopyAndShare from "psk-copyandshare";

Vue.use(CopyAndShare, { CopyAndShareName: "MyCopyAndShare" });
```

### Import psk-copyandshare and dependencies

The "src/main.js" file should look like this:
```
import Vue from "vue";
import App from "./App.vue";

import "./resources/bootstrap-vue";
import "./resources/psk-copyandshare";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)
```
<template>
    <div>
        <copy-and-share label="Copy text:" text="Random text to copy" @copied="updateCopied" /></p>
        <copy-and-share label="Copy or browse to:" text="https://github.com" @copied="updateCopied" browseButton /></p>
        <br>{{ copiedStatus }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            copiedStatus: ""
        }
    },
    methods: {
        updateCopied(message) {
            this.copiedStatus = message;
        }
    }
}
</script>
```

## Properties

Property | Description | Required | Default
-|-|-|-
text | Text to display and copy | yes | null
autofocus | Focus on load | no | false
disabled | Disable component | no | false
label | Label description | no | null
copyTitle | Title of copy button | no | Copy and share
browseButton | Show browse button | no | false
browseTitle | Title of browse button | no | Browse to

## Events

Event | Description
-|-
copied | When text is copied

## Using in the browser

To use directly in the browser, import bootstrap-vue before psk-copyandshare:
```
<script src="https://unpkg.com/vue-boostrap" />
<script src="https://unpkg.com/psk-copyandshare" />
```
