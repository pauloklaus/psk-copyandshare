<template>
    <div class="d-inline">
        <label v-if="label">{{ label }}</label>
        <b-input-group>
            <b-form-input ref="input" :value="text" :autofocus="autofocus" readonly :disabled="isDisabled" />
            <b-input-group-append>
                <b-button :disabled="isDisabled" @click="copyText" :title="copyTitle"><b-icon-share-fill /></b-button>
                <b-button :disabled="isDisabled" @click="browseTo" :title="browseTitle + ' ' + text" v-if="browseButton"><b-icon-box-arrow-up-right /></b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
    props: {
        autofocus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            required: true
        },
        copyTitle: {
            type: String,
            default: "Copy and share"
        },
        browseButton: {
            type: Boolean,
            default: false
        },
        browseTitle: {
            type: String,
            default: "Browse to"
        }
    },
    data() {
        return {
            term: "",
            items: null,
            selectedValue: null,
        }
    },
    computed: {
        isDisabled() {
            return this.disabled || !this.text;
        }
    },
    methods: {
        copyText() {
            this.$refs.input.select();
            this.$refs.input.setSelectionRange(0, 99999);
            document.execCommand("copy");

            this.$emit("copied");
        },
        browseTo() {
            window.open(this.text);
        }
    }
}
</script>

<style>
</style>
