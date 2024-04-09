// https://apifox.com/apidoc/shared-c05cb8d7-e591-4d9c-aff8-11065a0ec1de/api-67132163

import http from '@/utils/http'

export function getCategoryAPI () {
    return http.get('home/category/head')
}