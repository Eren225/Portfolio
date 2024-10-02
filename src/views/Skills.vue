<template>
  <div class="skills-container text-center p-10">
    <!-- Compétences en langages de programmation -->
    <h1 class="text-4xl font-bold text-white mb-20">COMPÉTENCES</h1>
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-10">
      <!-- HTML -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn.simpleicons.org/html5/333333" alt="HTML" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-5/6 h-full bg-gray-800 rounded-full"></div> <!-- 85% pour HTML -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">HTML</p>
      </li>

      <!-- CSS -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn.simpleicons.org/css3/333333" alt="CSS" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-4/5 h-full bg-gray-800 rounded-full"></div> <!-- 80% pour CSS -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">CSS</p>
      </li>

      <!-- PHP -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn.simpleicons.org/php/333333" alt="PHP" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-3/5 h-full bg-gray-800 rounded-full"></div> <!-- 65% pour PHP -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">PHP</p>
      </li>

      <!-- Java -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="../components/icons/java.png" alt="Java" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-4/5 h-full bg-gray-800 rounded-full"></div> <!-- 80% pour Java -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">Java</p>
      </li>

      <!-- C# -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="../components/icons/csharp.png" alt="C#" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-3/4 h-full bg-gray-800 rounded-full"></div> <!-- 75% pour C# -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">C#</p>
      </li>

      <!-- MySQL -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn.simpleicons.org/mysql/333333" alt="SQL" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-full h-full bg-gray-800 rounded-full"></div> <!-- 90% pour SQL -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">SQL</p>
      </li>

      <!-- Lua -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn.simpleicons.org/lua/333333" alt="Lua" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-2/3 h-full bg-gray-800 rounded-full"></div> <!-- 65% pour Lua -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">Lua</p>
      </li>

      <!-- JavaScript -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn.simpleicons.org/javascript/333333" alt="JavaScript" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-1/2 h-full bg-gray-800 rounded-full"></div> <!-- 50% pour JavaScript -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">JavaScript</p>
      </li>
    </ul>

    <!-- Section Langues -->
    <h1 class="text-4xl font-bold text-white mt-20 mb-10">LANGUES</h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10">
      <!-- Français -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn-icons-png.flaticon.com/512/197/197560.png" alt="Français" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-full h-full bg-gray-800 rounded-full"></div> <!-- 98% pour Français -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">Français</p>
      </li>

      <!-- Anglais -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="Anglais" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-3/4 h-full bg-gray-800 rounded-full"></div> <!-- 75% pour Anglais -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">Anglais</p>
      </li>

      <!-- Néerlandais -->
      <li class="flex flex-col items-center">
        <div class="bg-blue-400 hover:bg-blue-500 w-36 h-44 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110">
          <img src="https://cdn-icons-png.flaticon.com/512/197/197441.png" alt="Néerlandais" class="w-2/3 mb-2" />
          <div class="w-5/6 h-1 bg-gray-300 rounded-full mt-2">
            <div class="w-3/5 h-full bg-gray-800 rounded-full"></div> <!-- 60% pour Néerlandais -->
          </div>
        </div>
        <p class="text-gray-300 mt-4">Néerlandais</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>
