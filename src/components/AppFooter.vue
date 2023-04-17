<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <div class="container d-flex flex-column justify-content-center align-items-center py-2">
            <div>
                ©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI
            </div>
            <div>
                ©Konami Digital Entertainment
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer{
    background-color: red;
}
</style>