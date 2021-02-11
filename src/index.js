import Vue from "vue";
import CopyAndShare from "@/components/CopyAndShare";

function install(Vue, options = {}) {
    Vue.component(options.CopyAndShareName || "CopyAndShare", CopyAndShare);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { CopyAndShare };
