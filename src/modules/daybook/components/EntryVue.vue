<template>
    <div @click="$router.push({ name: 'entry', params: { id:1 }})">
        <div class="entryVue-conteiner mb-3 pointer p-2">
            <span class="text-succes fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>
        <div class="entry-description">
            Est aliqua ea proident laborum irure ullamco exercitation ullamco labore magna. Commodo officia aliquip sint commodo enim et anim minim quis eu consectetur. Ex eiusmod ea excepteur sunt duis consequat ad dolore aute et sunt incididunt. Exercitation irure aliqua proident duis voluptate officia officia occaecat cillum elit. Tempor elit enim nisi consectetur sit in. Proident eu minim anim esse occaecat officia dolor adipisicing dolor incididunt dolore aliquip.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entryVue-conteiner{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
}.entry-description{
    font-size: 12px;
}
</style>