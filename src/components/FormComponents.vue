<template>
    <div class="card-placement">
        <div class="card card-component">
            <div class="card-header">
                <span class="card-header-title">Bulma vs Nothing</span>
            </div>
            <div class="card-content">
                <div class="columns">
                    <div class="column">
                        <label class="label">Bulma:</label>
                        <br>
                        <div class="component">
                            <div class="field">
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
                                    <span class="icon is-small is-left">
                                    <font-awesome-icon icon="user"></font-awesome-icon>
                                </span>
                                    <span class="icon is-small is-right">
                                    <font-awesome-icon icon="check"></font-awesome-icon>
                                </span>
                                </div>
                                <p class="help is-success">This username is available</p>
                            </div>

                            <br>
                            <div class="is-loading control is-large">
                            <textarea class="textarea is-danger is-focused is-large" placeholder="textarea" rows="2"
                                      disabled></textarea>
                            </div>
                            <br>
                            <label class="label">Selectors:</label>
                            <div class="select">
                                <label>
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </label>
                            </div>
                            <br>
                            <br>
                            <div class="select is-multiple">
                                <label>
                                    <select multiple size="3">
                                        <option value="Argentina">Argentina</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Brazil">Brazil</option>
                                    </select>
                                </label>
                            </div>
                            <br>
                            <br>
                            <div>
                                <label class="label checkbox">Checkbox:</label>
                                <input type="checkbox">
                                Remember me
                            </div>
                            <br>
                            <label class="label">Radio:</label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="rsvp">
                                    Going
                                </label>
                                <label class="radio">
                                    <input type="radio" name="rsvp">
                                    Not going
                                </label>
                                <label class="radio" disabled>
                                    <input type="radio" name="rsvp" disabled>
                                    Maybe
                                </label>
                            </div>
                            <br>
                            <label class="label">File field:</label>
                            <div class="file has-name">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                                    <span class="file-name">
                                      Screen Shot 2017-07-29 at 15.54.25.png
                                    </span>
                                </label>
                            </div><br>
                            <div class="file has-name is-right">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
                                      <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                      </span>
                                      <span class="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                                    <span class="file-name">
                                      Screen Shot 2017-07-29 at 15.54.25.png
                                    </span>
                                </label>
                            </div>
                            <div class="file has-name is-boxed">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
                                      <span class="file-icon">
                                       <font-awesome-icon icon="upload"></font-awesome-icon>
                                      </span>
                                      <span class="file-label">
                                        Choose a file…
                                      </span>
                                    </span>
                                    <span class="file-name">
                                      Screen Shot 2017-07-29 at 15.54.25.png
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Nothing:</label>
                        <br>
                        <div class="component">
                            <div><input class="input" type="text" placeholder="Text input"></div>
                            <br>
                            <br>
                            <br>
                            <textarea placeholder="textarea"></textarea>
                            <br>
                            <div class="select-html-classic-selectors">
                                <label class="label">Selectors:
                                    <br><select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </label>
                            </div>
                            <br>
                            <br>
                            <div class="select-html-classic-checkbox">
                                <label class="label">Checkbox:</label>
                                <input type="checkbox">
                                Remember me
                            </div>
                            <br>
                            <label class="label">Radio:</label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="rsvp2">
                                    Going
                                </label>
                                <label class="radio">
                                    <input type="radio" name="rsvp2">
                                    Not going
                                </label>
                                <label class="radio" disabled>
                                    <input type="radio" name="rsvp2" disabled>
                                    Maybe
                                </label>
                            </div>
                            <br>
                            <label class="label">File field:</label>
                            <input type="file"
                                   accept="image/png, image/jpeg">

                        </div>
                    </div>
                </div>

            </div>
            <FooterCard/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FooterCard from "@/components/FooterCard.vue";

    @Component({
        components: {
            FooterCard,
        },
    })
    export default class FormComponents extends Vue {

        private created() {
        }
    }
</script>
