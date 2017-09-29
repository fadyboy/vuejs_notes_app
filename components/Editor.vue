<template>
    <div id="note-editor">
        <textarea
         :value="activeNoteText"
         @input="editNote"
         class="form-control">
         </textarea>
    </div>
</template>
<script>
    import { mapGetters, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
            'notes',
            'activeNote',
            'activeNoteText'
        ])
        },

        methods: mapActions([
            'editNote'
        ])
    }
</script>